import React, { useEffect, useRef, useState } from "react";
import DrawerNavbarLayout from "@/components/layout/drawerNavbarLayout";
import dynamic from "next/dynamic";
import CategoryBar from "@/components/aside/categoryBar";
import NotesButtonGroup from "@/components/buttons/notesButtonGroup";
import { stripHtml } from "string-strip-html";
import MenuTitle from "@/components/aside/menuTitle";
import AsideInput from "@/components/aside/asideInput";
import AsideNotesTile from "@/components/aside/asideNotesTile";
import LabelInput from "@/components/inputs/labelInput";
import TrailingIconButton from "@/components/buttons/trailingIconButton";
import { DateTime } from "luxon";
import type { Note } from "@/types/notes";
import { v4 as uuid } from "uuid";

const QuillEditor = dynamic(
    () => import("../components/markdownEditor/quillEditor"),
    { ssr: false }
);

const initialNote: Note = {
    id: uuid(),
    title: "",
    content: "",
    date: DateTime.now().toFormat("MMMM dd, yyyy"),
};

const Notes = () => {
    const [currentNote, setCurrentNote] = useState<Note | null>(
        JSON.parse(localStorage.getItem("currentNote") as string)
    );
    const [notes, setNotes] = useState<Note[]>([]);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [search, setSearch] = useState<string>("");
    const [results, setResults] = useState<Note[]>([]);

    useEffect(() => {
        const data = localStorage.getItem("currentNote");
        if (data) {
            const note = JSON.parse(data);
            setTitle(note.title);
            setContent(note.content);
            setCurrentNote(note);
        }

        const allNotes = localStorage.getItem("notes");
        if (allNotes) {
            const notesArr = JSON.parse(allNotes);
            if (notesArr) {
                setNotes(notesArr);
            }
        }
    }, []);

    useEffect(() => {
        if (!currentNote?.id) {
            setContent("");
            setTitle("");
        }
    }, [currentNote]);

    const saveShortcutHandler = (e: KeyboardEvent) => {
        e.preventDefault();
        if (e.key === "s" || e.key === "S") {
            if (e.ctrlKey || e.metaKey) {
                console.log("Save");
            }
        }
    };

    const handleSave = () => {
        const noteObj: Note = {
            id: currentNote?.id ?? uuid(),
            content,
            title,
            date: DateTime.now().toFormat("MMMM dd, yyyy"),
        };

        const found = notes?.find((note) => note.id === noteObj.id);

        if (!found) {
            setNotes((prevState) => {
                const notesObj = prevState?.concat(noteObj) ?? [noteObj];

                localStorage.setItem("notes", JSON.stringify(notesObj));

                return notesObj;
            });
        } else {
            setNotes((prevState) => {
                const notesObj = prevState?.map((note) =>
                    note.id !== noteObj.id ? note : noteObj
                );

                localStorage.setItem("notes", JSON.stringify(notesObj));

                return notesObj;
            });
        }
        localStorage.setItem("currentNote", JSON.stringify(noteObj));
    };

    const handleNewNote = () => {
        setTitle("");
        setContent("");
        setCurrentNote(null);
        localStorage.setItem("currentNote", JSON.stringify(""));
    };

    const handleRestoreNote = (note: Note) => {
        setTitle(note.title);
        setContent(note.content);
        setCurrentNote(note);
        localStorage.setItem("currentNote", JSON.stringify(note));
    };

    const handleDeleteNote = (note: Note) => {
        setNotes((prevState) => {
            const allNotes = prevState.filter((item) => item.id !== note.id);
            localStorage.setItem("currentNote", JSON.stringify(""));
            localStorage.setItem("notes", JSON.stringify(allNotes));
            return allNotes;
        });

        setTitle((prev) => {
            prev = "";
            console.log(prev);
            return prev;
        });
        setContent("");
    };

    const handleSearch = () => {};

    return (
        <>
            <DrawerNavbarLayout>
                <CategoryBar>
                    <div className="flex flex-col-reverse gap-2 pb-16">
                        {/* <AsideNotesTile /> */}

                        {notes
                            .filter((note) => note.title.includes(search))
                            .map((note) => (
                                <AsideNotesTile
                                    key={note.id}
                                    note={note}
                                    onClick={handleRestoreNote}
                                    onDelete={handleDeleteNote}
                                />
                            ))}

                        <div className="grid">
                            <MenuTitle title="All Notes" />
                            <TrailingIconButton
                                label="Create New Note"
                                onClick={handleNewNote}
                            />
                        </div>

                        <AsideInput
                            label="Search Notes"
                            placeholder="Type Note title..."
                            value={search}
                            handler={setSearch}
                        />
                    </div>
                </CategoryBar>

                <div className=" flex flex-col p-4 w-full gap-4 lg:ml-80 relative">
                    <LabelInput
                        value={title}
                        setValue={setTitle}
                        title="Note Title"
                        placeholder="Type Your Note Title..."
                    />
                    <QuillEditor value={content} setValue={setContent} />
                    {stripHtml(content ?? "").result && (
                        <NotesButtonGroup onSave={handleSave} />
                    )}
                </div>
            </DrawerNavbarLayout>
        </>
    );
};

export default dynamic(() => Promise.resolve(Notes), { ssr: false });

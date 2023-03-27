-- CreateTable
CREATE TABLE "apis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "api" TEXT,
    "description" TEXT,
    "auth" TEXT,
    "https" INTEGER,
    "cors" TEXT,
    "link" TEXT,
    "category" TEXT
);

-- CreateTable
CREATE TABLE "resources" (
    "resID" TEXT NOT NULL PRIMARY KEY,
    "tags" TEXT,
    "tagID" TEXT,
    "name" TEXT,
    "url" TEXT,
    "description" TEXT
);

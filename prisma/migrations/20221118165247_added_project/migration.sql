/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Example";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "tech" TEXT NOT NULL,
    "repo" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "me_id" TEXT NOT NULL,
    CONSTRAINT "Project_me_id_fkey" FOREIGN KEY ("me_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

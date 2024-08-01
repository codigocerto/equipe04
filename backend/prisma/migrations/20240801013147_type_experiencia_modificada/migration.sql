/*
  Warnings:

  - You are about to drop the column `senioridade` on the `user_infos` table. All the data in the column will be lost.
  - Made the column `experiencia` on table `user_infos` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user_infos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pais" TEXT NOT NULL,
    "funcaoPretendida" TEXT NOT NULL,
    "disponibilidade" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "liderar" BOOLEAN NOT NULL,
    "mentor" BOOLEAN NOT NULL DEFAULT false,
    "experiencia" TEXT NOT NULL,
    "newsletter" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "user_infos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_user_infos" ("disponibilidade", "experiencia", "funcaoPretendida", "id", "liderar", "linkedin", "mentor", "newsletter", "pais", "userId") SELECT "disponibilidade", "experiencia", "funcaoPretendida", "id", "liderar", "linkedin", "mentor", "newsletter", "pais", "userId" FROM "user_infos";
DROP TABLE "user_infos";
ALTER TABLE "new_user_infos" RENAME TO "user_infos";
CREATE UNIQUE INDEX "user_infos_userId_key" ON "user_infos"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

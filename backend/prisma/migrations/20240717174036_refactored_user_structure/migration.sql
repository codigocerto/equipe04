/*
  Warnings:

  - You are about to drop the `user_infos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `disponibilidade` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funcaoPretendida` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `liderar` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedin` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pais` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senioridade` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "user_infos_userId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "user_infos";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "funcaoPretendida" TEXT NOT NULL,
    "disponibilidade" TEXT NOT NULL,
    "senioridade" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "liderar" BOOLEAN NOT NULL,
    "experiencia" INTEGER DEFAULT 0,
    "newsletter" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("email", "id", "nome") SELECT "email", "id", "nome" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

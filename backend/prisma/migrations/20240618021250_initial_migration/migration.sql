-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "user_infos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pais" TEXT NOT NULL,
    "funcaoPretendida" TEXT NOT NULL,
    "disponibilidade" TEXT NOT NULL,
    "senioridade" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "liderar" BOOLEAN NOT NULL,
    "experiencia" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "user_infos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_infos_userId_key" ON "user_infos"("userId");

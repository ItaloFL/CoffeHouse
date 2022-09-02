/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Depoimento` table. All the data in the column will be lost.
  - Added the required column `user` to the `Depoimento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Depoimento" DROP CONSTRAINT "Depoimento_userEmail_fkey";

-- AlterTable
ALTER TABLE "Depoimento" DROP COLUMN "userEmail",
ADD COLUMN     "user" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Depoimento" ADD CONSTRAINT "Depoimento_user_fkey" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

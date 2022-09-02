-- CreateTable
CREATE TABLE "Depoimento" (
    "id" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "depoimento" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Depoimento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Depoimento" ADD CONSTRAINT "Depoimento_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

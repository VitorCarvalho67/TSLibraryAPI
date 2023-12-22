-- AlterTable
ALTER TABLE `rents` ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE `devolutions` (
    `id` VARCHAR(191) NOT NULL,
    `rentId` VARCHAR(191) NOT NULL,
    `devolutionAt` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `devolutions_rentId_key`(`rentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `avaliation` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `bookId` VARCHAR(191) NOT NULL,
    `avaliationAt` DATETIME(3) NOT NULL,
    `description` ENUM('EXCELLENT', 'GOOD', 'NORMAL', 'BAD') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `devolutions` ADD CONSTRAINT `devolutions_rentId_fkey` FOREIGN KEY (`rentId`) REFERENCES `rents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliation` ADD CONSTRAINT `avaliation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliation` ADD CONSTRAINT `avaliation_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

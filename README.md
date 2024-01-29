<p align="center">
  <img src="https://github.com/VitorCarvalho67/TSLibraryAPI/assets/102667323/85da05f2-6c31-4520-b55d-ed7eb01d40d8" />
</p>

# TSLibraryAPI (Node.js API)

[![GitHub license](https://img.shields.io/github/license/vitorcarvalho67/TSLibraryAPI)](vitorcarvalho67/TSLibraryAPI/blob/master/LICENSE) ![GitHub stars](https://img.shields.io/github/stars/vitorcarvalho67/TSLibraryAPI) ![GitHub stars](https://img.shields.io/github/languages/count/vitorcarvalho67/TSLibraryAPI) ![GitHub stars](https://img.shields.io/github/languages/top/vitorcarvalho67/TSLibraryAPI) ![GitHub stars](https://img.shields.io/github/repo-size/vitorcarvalho67/TSLibraryAPI) ![GitHub stars](https://img.shields.io/github/languages/code-size/vitorcarvalho67/TSLibraryAPI)

TSLibraryAPI is a robust and versatile REST API built with Node.js, utilizing Prisma as its ORM and TypeScript for enhanced reliability and developer experience. Designed specifically for library management systems, it offers comprehensive functionalities ranging from handling book rentals, managing book and author records, to tracking user interactions. Its efficient and intuitive design ensures seamless integration and scalability, making it ideal for both small-scale library applications and larger, more complex systems. With TSLibraryAPI, managing a library's digital operations becomes a streamlined and efficient process, providing a solid foundation for developers looking to build or enhance library management software.

## How To Use
Prerequisites
- Node.js
- TypeScript
- Docker-Compose
- Nginx
- Prisma
- MySQL

Clone this repository
```bash
git clone https://github.com/VitorCarvalho67/TSLibraryAPI.git
```

Navigate to the project directory
```bash
cd TSLibraryAPI
```

up migration
```bash
npx prisma migrate dev --name init
```

>[!IMPORTANT]
> remember to uncomment .env.example and remove .example from the file name.

Run server side
```bash
yarn dev
```

## Runnig with Docker

```bash
docker-compose up -d
```

## Contributing
Contributions to this project are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to the branch.
5. Submit a pull request.
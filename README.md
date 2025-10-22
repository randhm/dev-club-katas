# dev-club-katas

A TypeScript-based repository for practicing coding katas with Jest testing framework.

## Getting Started

### Setup Instructions

1. **Fork this repository** to your own GitHub account by clicking the "Fork" button at the top right of this page.

2. **Clone your forked repository** to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/dev-club-katas.git
   cd dev-club-katas
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Verify setup** by running the example tests:
   ```bash
   npm test
   ```

## Working on Katas

### Repository Structure

```
dev-club-katas/
├── 6kyu/                    # Katas organized by difficulty
│   └── help-the-bookseller/ # Name of the kata
│       ├── main.ts          # Implementation file
│       └── main.test.ts     # Test file
├── example-setup/           # Example kata setup
│   ├── main.ts
│   └── main.test.ts
└── package.json
```

### Creating a New Kata

1. **Create a new directory** for your kata (organized by difficulty level):
   ```bash
   mkdir 6kyu/your-kata-name
   # or
   mkdir 7kyu/your-kata-name
   # or
   mkdir 5kyu/your-kata-name
   ```

2. **Create the implementation and test files**:
   ```bash
   touch 6kyu/your-kata-name/main.ts
   touch 6kyu/your-kata-name/main.test.ts
   ```

3. **Use the example setup** as a template.

### Running Tests

- **Run all tests**: `npm test`
- **Run tests in watch mode**: `npm test -- --watch`
- **Run tests for a specific kata**: `npm test -- <kata-name>`

### Code Quality

This project includes:
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Jest** for testing

All code will be automatically formatted according to the Prettier configuration.

## Workflow

1. **Work on your forked repository** - this is your personal practice space
2. **Commit your solutions** as you complete each kata
3. **Push to your own repository** to save your progress
4. **Share and discuss** solutions at dev club

## Tips

- Start by converting the tests from Codewars into the repo, typically these tests are written using Mocha and Chai, so it's best to convert them into Jest. Start by using Co-pilot to do this.
- Start with the failing tests to understand the requirements
- Implement the solution incrementally
- Run tests frequently to ensure your solution works
- Don't hesitate to refactor once tests pass

Happy coding! 🚀
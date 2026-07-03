# josh-chatbot - AI Agents Development Instructions

## Project Overview
josh-chatbot is a TypeScript project.

**Repository:** findstoke/josh-chatbot  
**Primary Language:** TypeScript

## Development Environment

### Available Scripts
- `npm run dev` - next dev
- `npm run embed-resume` - node scripts/embed-resume.js
- `npm run embed-star` - STAR_PATH=public/star.txt node scripts/embed-resume.js
- `npm run embed-structured` - node scripts/embed-structured.js
- `npm run build` - next build
- `npm run start` - next start
- `npm run lint` - next lint

### Next.js Development
- Start development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm start`
- Local development URL: http://localhost:3000

### TypeScript
- All new code should use TypeScript
- Run type checking: `npx tsc --noEmit`
- Types are defined in `/types` directory
- Use strict TypeScript configuration

## Testing Guidelines

## Pull Request Workflow

### Before Creating a PR
1. **Run all tests**: Ensure all existing tests pass
2. **Add new tests**: Cover any new functionality
3. **Type checking**: Run TypeScript compiler to check for type errors
4. **Linting**: Fix any linting issues
5. **Build verification**: Ensure the project builds successfully (`npm run build`)

### PR Description Template
```
## What Changed
Brief description of the changes made.

## Why
Explanation of why these changes were necessary.

## Testing
- [ ] All existing tests pass
- [ ] New tests added for new functionality
- [ ] Manual testing completed
- [ ] Build verification successful

## Checklist
- [ ] Code follows project conventions
- [ ] TypeScript types are properly defined
- [ ] Documentation updated if needed
- [ ] No console.log statements left in code
```

### Code Review Guidelines
- **Small PRs**: Keep pull requests focused and small
- **Clear commits**: Use descriptive commit messages
- **Documentation**: Update relevant documentation
- **Performance**: Consider performance implications of changes
- **Accessibility**: Ensure UI changes maintain accessibility standards

## Development Best Practices

### Code Quality
- Follow existing code patterns and conventions
- Use meaningful variable and function names
- Keep functions small and focused
- Comment complex logic but avoid obvious comments

### File Organization
- Place reusable components in `/components`
- Utility functions go in `/utils` or `/lib`

### Git Workflow
1. Create feature branch from main: `git checkout -b feature/description`
2. Make focused commits with clear messages
3. Push branch and create pull request
4. Address code review feedback
5. Merge when approved and tests pass

---
*Generated development instructions for AI agents working on josh-chatbot*
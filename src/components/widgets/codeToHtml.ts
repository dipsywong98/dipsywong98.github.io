export const codeToHtml = async ({ code, language }) => {
  const { getHighlighter } = await import('shiki');
  const highlighter = await getHighlighter({
    themes: ['one-dark-pro'],
    langs: [
      language
    ],
  });

  return highlighter.codeToHtml(code, {
    lang: language,
    themes: {
      dark: 'one-dark-pro',
      light: 'one-dark-pro',
    },
  });
};
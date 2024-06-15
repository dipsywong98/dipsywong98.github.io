
export const codeToHtml = async ({ code, language }) => {
  const { bundledLanguages, getHighlighter } = await import('shiki');
  const highlighter = await getHighlighter({
    themes: ['one-dark-pro'],
    langs: [
      ...Object.keys(bundledLanguages),
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
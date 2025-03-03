export const useUtils = () => {
  return {
    hasRichText: (richText) => {
      return richText.content[0].hasOwnProperty('content')
    }
  }
}

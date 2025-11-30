// bodyBuilder.ts
export const buildBody = (
  data: Record<string, any>,
  type: 'json' | 'formData' = 'json',
) => {
  if (type === 'formData') {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });
    return formData;
  }

  // JSON
  return JSON.stringify(data);
};

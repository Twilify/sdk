export const isEditorMode = () => {
  const qs = window.location.search;

  const queryParams: Record<string, number | string> = {};
  qs.substring(1) // Remove the leading '?' character
    .split('&') // Split into key-value pairs
    .forEach((pair) => {
      const [key, value] = pair.split('=');
      queryParams[key] = decodeURIComponent(value);
    });

  console.log(queryParams);

  if (queryParams.twilifyEditorMode) {
    return true;
  }

  return false;
};

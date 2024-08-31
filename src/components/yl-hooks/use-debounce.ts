export default function useDebounce(func: Function, delay: number) {
  let timeout: any | null = null;

  return (...args: any[]) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

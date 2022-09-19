import { useRef, useEffect } from 'react';

const useIntersectionObserver = (
  onIntersect,
  {
    threshold = 0,
    root = null,
    rootMargin = undefined,
  } = {},
) => {
  const ref = useRef();
  let observer;
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (window.IntersectionObserver) {
      const callback = (entries) => {
        entries.forEach((entry) => {
          onIntersect(entry.isIntersecting);
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      };
      const args = { threshold, root, rootMargin };
      observer = new IntersectionObserver(callback, args);
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [onIntersect, JSON.stringify(threshold), root, rootMargin]);

  return ref;
};

export default useIntersectionObserver;

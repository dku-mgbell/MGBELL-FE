import { useMutation } from '@tanstack/react-query';

const postImages = async (urls: string[], files: File[]) => {
  const response = await Promise.all(
    files.map((file, index) =>
      fetch(urls[index], {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        },
      }),
    ),
  );
  return response;
};

export const usePostImages = () => {
  return useMutation({
    mutationFn: (data: { files: File[]; urls: string[] }) =>
      postImages(data.urls, data.files),
  });
};

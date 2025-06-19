function SlideContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full overflow-auto h-full p-[20px]">
      {children}
    </div>
  );
}

function EmptyContent() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-h4 font-bold text-gray4 w-full">
      찜한 매장이 없어요!
    </div>
  );
}

export const Favorite = {
  Empty: EmptyContent,
  SlideContainer,
};

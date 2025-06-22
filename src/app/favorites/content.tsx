function SlideContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full overflow-auto h-full p-[20px]">
      {children}
    </div>
  );
}

function EmptyContent() {
  return (
    <div className="absolute-center text-h5 font-bold text-gray5 w-full">
      찜한 매장이 없어요!
    </div>
  );
}

export const Favorite = {
  Empty: EmptyContent,
  SlideContainer,
};

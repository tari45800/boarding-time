import Link from 'next/link';
import React from 'react';

const Header = () => {
  const headerHeight = '20';

  return (
    <div className={`h-${headerHeight}`}>
      <div className={`fixed flex w-full items-center justify-between border p-[var(--pc-padding)] h-${headerHeight}`}>
        <Link href="/" className="text-3xl font-black">
          Boarding Time
        </Link>
        <div className="flex gap-4">
          <Link className="text-xl font-bold" href="/signup">
            회원가입
          </Link>
          <Link className="text-xl font-bold" href="/login">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

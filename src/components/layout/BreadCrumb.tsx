"use client";

// react/next
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname(); // 현재 경로
  const pathSegments = pathname.split("/").filter((seg) => seg); // 공백 제거

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");

    // 첫 글자만 대문자 처리
    const label = decodeURIComponent(
      segment.charAt(0).toUpperCase() + segment.slice(1)
    );

    return {
      label,
      href,
    };
  });

  return (
    <nav className="bread-crumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {breadcrumbs.map((crumb, i) => (
          <li key={i}>
            <Link href={crumb.href}>{crumb.label}</Link>
            {i < breadcrumbs.length - 1}
          </li>
        ))}
      </ol>
    </nav>
  );
}

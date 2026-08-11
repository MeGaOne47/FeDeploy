# AGENTS.md

## 1. PROJECT OVERVIEW

Project là ứng dụng web sử dụng:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js
- pnpm

Agent phải đọc và hiểu cấu trúc project hiện tại trước khi thực hiện các thay đổi lớn.

---

# 2. GENERAL RULES

## 2.1. Không tự ý thay đổi phạm vi task

Chỉ sửa những phần liên quan trực tiếp đến yêu cầu của user.

Không tự ý:

- Refactor toàn bộ project.
- Đổi architecture.
- Đổi framework.
- Đổi UI/UX nếu không được yêu cầu.
- Xóa component đang được sử dụng.
- Xóa API đang được sử dụng.
- Thay đổi database schema.
- Thay đổi authentication.
- Thay đổi dependency nếu không cần thiết.

Nếu phát hiện vấn đề không liên quan đến task:

1. Không tự ý sửa.
2. Ghi chú vấn đề.
3. Tiếp tục task nếu có thể.

---

# 3. PACKAGE MANAGER

Project sử dụng `pnpm`.

Luôn ưu tiên:

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
```

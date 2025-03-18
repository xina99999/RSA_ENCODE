# Thư viện RSAEncryption

`RSAEncryption` là một thư viện mã hóa và giải mã dữ liệu sử dụng thuật toán RSA, được xây dựng dựa trên thư viện `jsencrypt`. Thư viện này cung cấp giao diện đơn giản để tạo cặp khóa RSA, mã hóa dữ liệu bằng khóa công khai và giải mã dữ liệu bằng khóa riêng tư. Nó hoạt động tốt trên môi trường Node.js.

## Tính năng
- Tạo cặp khóa RSA với kích thước mặc định 2048-bit.
- Mã hóa dữ liệu bằng khóa công khai.
- Giải mã dữ liệu bằng khóa riêng tư.
- Hỗ trợ định dạng khóa PEM.
- Xử lý lỗi khi mã hóa hoặc giải mã thất bại.

## Cài đặt

### Yêu cầu
- Node.js phiên bản 14.x hoặc cao hơn.
- Thư viện phụ thuộc: `jsencrypt`.

### Hướng dẫn cài đặt
Cài đặt thư viện và dependency qua npm:

```bash
npm install RSA_ENCODE

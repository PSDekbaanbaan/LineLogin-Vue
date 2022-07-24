const baseEnum = {
  status: {
    data: [
      { id: 0, name: "ยกเลิก" },
      { id: 1, name: "ใช้งาน" },
    ],
    field: { value: "id", text: "name" },
  },
  vatType: {
    data: [
      { id: 0, name: "NoVat" },
      { id: 1, name: "VatIn" },
      { id: 2, name: "VatOut" },
    ],
    field: { value: "id", text: "name" },
  },
  statusUse: {
    data: [
      { id: 0, name: "ไม่ใช้" },
      { id: 1, name: "ใช้งาน" },
    ],
    field: { value: "id", text: "name" },
  },
  statusOnline: {
    data: [
      { id: 0, name: "ไม่ใช้" },
      { id: 1, name: "ใช้งาน" },
    ],
    field: { value: "id", text: "name" },
  },
};

export default baseEnum;

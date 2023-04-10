import { TagsBoxItemComponent } from "./item";
import { IoMdAddCircle } from "react-icons/io";

export const ManagerCategoryBoxComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: 10,
        gap: 10,
        padding: "20px",
        width: "100%",
      }}
    >
      <span>Danh sách thể loại</span>
      <input
        style={{
          padding: "10px 20px",
          border: "1px solid black",
          borderRadius: 5,
        }}
        placeholder="Nhập thể loại cần tìm kiếm"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: 300,
          minHeight: 300,
          overflow: "auto",
          scrollSnapType: "y mandatory",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((v) => (
          <TagsBoxItemComponent key={v} />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          WebkitFlexDirection: "row",
          msFlexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <input
          type="text"
          style={{
            flex: 1,
            padding: "10px",
            borderBottom: "1px solid black",
          }}
          placeholder="Nhập một thể loại mới"
        />
        <IoMdAddCircle style={{ fontSize: 30, cursor: "pointer" }} />
      </div>
    </div>
  );
};

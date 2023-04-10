import React, { useEffect, useState } from "react";
import { IconButton, Stack } from "@mui/material";
import { GrChapterAdd } from "react-icons/gr";
import { IoIosRemoveCircle } from "react-icons/io";

interface TagsBoxProps {
  values: string[];
  change: (v: string) => void;
}

const Component = (props: TagsBoxProps) => {
  const { change, values } = props;
  const [tag, setTag] = useState<string>("");

  useEffect(() => {
    setTag("");

    return () => {
      setTag("");
    };
  }, []);

  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "10px",
          gap: "10px",
        }}
      >
        <input
          placeholder="nhập một thẻ"
          onChange={(e) => setTag(e.target.value)}
          style={{
            borderBottom: "1px solid black",
            padding: "10px 20px",
            fontSize: "14px",
            flex: 1,
          }}
        />
        <Stack
          sx={{
            padding: "10px 20px",
            border: "1px solid black",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          justifyContent="center"
          alignItems="center"
          onClick={async () => {
            if (tag === "") return;

            await change(tag);
            await setTag("");
          }}
        >
          <GrChapterAdd fontSize={"16px"} />
        </Stack>
      </div>

      {values.map((v, index) => {
        return (
          <div
            key={`tags-item-${index}`}
            style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
          >
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "10px",
                backgroundColor: "#DFE0DF",
                width: "fit-content",
                borderRadius: "5px",
                transition: "ease all .3s",
                "&:hover ": {
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 10px",
                },
              }}
              direction="row"
            >
              <span style={{ fontSize: "14px", userSelect: "none" }}>
                asdsad
              </span>
              <IoIosRemoveCircle
                onClick={() => change(v)}
                fontSize={24}
                style={{ color: "#C25452", cursor: "pointer" }}
              />
            </Stack>
          </div>
        );
      })}
    </div>
  );
};

export const ManagerContentTagsComponent = React.memo(Component);

import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";

export const Component = () => {
  const router = useRouter();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        padding: "10px",
        background:
          "linear-gradient(178.27deg, rgba(243, 156, 18, 0.3) -5.34%, rgba(255, 163, 85, 0.18) 53.58%, rgba(255, 174, 136, 0.3) 100.39%)",
      }}
    >
      <Stack
        sx={{
          borderRadius: "5px",
          transition: "all ease .3s",
          overflow: "hidden",
          "&:hover ": {
            backgroundColor: "#402E3260",
            "& > span ": {
              color: "#fff",
              boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.6)",
              transform: "translate(0px,-3px)",
            },
          },
          "&:active ": {
            color: "#fff",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.3)",
            transform: "translate(0px,-1px)",
          },
        }}
        onClick={() => {
          router.push("/manager");
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: "700",
            padding: "10px 20px",
            cursor: "pointer",
            transition: "all ease .5s",
          }}
        >
          Thống kê
        </span>
      </Stack>
      <Stack
        sx={{
          borderRadius: "5px",
          transition: "all ease .3s",
          overflow: "hidden",
          "&:hover ": {
            backgroundColor: "#402E3260",
            "& > span ": {
              color: "#fff",
              boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.6)",
              transform: "translate(0px,-3px)",
            },
          },
          "&:active ": {
            color: "#fff",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.3)",
            transform: "translate(0px,-1px)",
          },
        }}
        onClick={() => {
          router.push("/manager/content");
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: "700",
            padding: "10px 20px",
            cursor: "pointer",
            transition: "all ease .5s",
          }}
        >
          Bài viết
        </span>
      </Stack>
    </div>
  );
};

export const LeftbarManagerLayoutComponent = React.memo(Component);

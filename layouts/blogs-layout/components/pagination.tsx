"use client";
import { Box, Button, Typography } from "@mui/material";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { useState } from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current page
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        mt: 6,
        mb: 4,
      }}
    >
      {/* Previous Button */}
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={{
          fontFamily: poppins.style.fontFamily,
          fontSize: 16,
          color:
            currentPage === 1 ? COLORS.TEXT_TERNARY_COLOR : COLORS.SECONDARY,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "transparent",
            color: COLORS.PRIMARY,
          },
        }}
      >
        ← Previous
      </Button>

      {/* Page Numbers */}
      <Box sx={{ display: "flex", gap: 1 }}>
        {getPageNumbers().map((page, index) => (
          <Box key={index}>
            {page === "..." ? (
              <Typography
                sx={{
                  px: 2,
                  py: 1,
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.TEXT_TERNARY_COLOR,
                }}
              >
                ...
              </Typography>
            ) : (
              <Button
                onClick={() => onPageChange(page as number)}
                sx={{
                  minWidth: 40,
                  height: 40,
                  borderRadius: "8px",
                  fontFamily: poppins.style.fontFamily,
                  fontSize: 16,
                  fontWeight: currentPage === page ? 600 : 400,
                  color: currentPage === page ? COLORS.WHITE : COLORS.SECONDARY,
                  backgroundColor:
                    currentPage === page ? COLORS.PRIMARY : "transparent",
                  border:
                    currentPage === page
                      ? "none"
                      : `1px solid ${COLORS.SECONDARY}`,
                  "&:hover": {
                    backgroundColor:
                      currentPage === page ? COLORS.PRIMARY : COLORS.SECONDARY,
                    color: COLORS.WHITE,
                  },
                }}
              >
                {page}
              </Button>
            )}
          </Box>
        ))}
      </Box>

      {/* Next Button */}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        sx={{
          fontFamily: poppins.style.fontFamily,
          fontSize: 16,
          color:
            currentPage === totalPages
              ? COLORS.TEXT_TERNARY_COLOR
              : COLORS.SECONDARY,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "transparent",
            color: COLORS.PRIMARY,
          },
        }}
      >
        Next →
      </Button>
    </Box>
  );
};

export default Pagination;

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationPacientsProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export function PaginationPacients({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationPacientsProps) {
  return (
    <Pagination>
      <PaginationContent>
        {!(currentPage === 0) && (
          <>
            <PaginationItem>
              <PaginationPrevious onClick={() => setCurrentPage(0)} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(currentPage - 1)}>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationLink onClick={() => setCurrentPage(currentPage)} isActive>
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        {!(currentPage === totalPages) && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(currentPage + 1)}>
                {currentPage + 2}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={() => setCurrentPage(totalPages)} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}

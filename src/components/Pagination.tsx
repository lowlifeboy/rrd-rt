import React from "react";

interface NavigationProps {
  quantity: number;
  page: number;
  handleSetPage: (number: number) => void;
}

export default function Pagination({page, handleSetPage, quantity}: NavigationProps) {
  if (quantity > 6) {
    if (page && page <= 4) {
      const needDots = page + 1 + 2 + 1 < quantity;
      const displayLastPage = page + 1 + 2 + 1 === quantity;

      return (
        <div className="pagination">
          {Array.from(Array(6).keys()).map((pageIndex) => (
            <button
              key={pageIndex}
              type="button"
              className={pageIndex + 1 === page ? "active" : undefined}
              onClick={() => handleSetPage(pageIndex + 1)}
            >
              {pageIndex + 1}
            </button>
          ))}
          {needDots ? (
            <>
              <div className="dots">
                <div className="dot"/>
                <div className="dot"/>
                <div className="dot"/>
              </div>
              <button type="button" onClick={() => handleSetPage(quantity)}>
                {quantity}
              </button>
            </>
          ) : displayLastPage ? (
            <button type="button" onClick={() => handleSetPage(quantity)}>
              {quantity}
            </button>
          ) : null}
        </div>
      );
    }

    if (page && page > 3 && page < quantity - 4) {
      return (
        <div className="pagination">
          <button type="button" onClick={() => handleSetPage(1)}>
            1
          </button>
          <div className="dots">
            <div className="dot"/>
            <div className="dot"/>
            <div className="dot"/>
          </div>
          {Array.from(Array(page + 1 + 2).keys())
            .slice(page - 2)
            .map((pageIndex) => (
              <button
                key={pageIndex}
                type="button"
                className={pageIndex + 1 === page ? "active" : undefined}
                onClick={() => handleSetPage(pageIndex + 1)}
              >
                {pageIndex + 1}
              </button>
            ))}
          <div className="dots">
            <div className="dot"/>
            <div className="dot"/>
            <div className="dot"/>
          </div>
          <button type="button" onClick={() => handleSetPage(quantity)}>
            {quantity}
          </button>
        </div>
      );
    }

    return (
      <div className="pagination">
        <button type="button" onClick={() => handleSetPage(1)}>
          1
        </button>
        <div className="dots">
          <div className="dot"/>
          <div className="dot"/>
          <div className="dot"/>
        </div>
        {Array.from(Array(6).keys()).map((pageIndex) => (
          <button
            key={quantity - 6 + pageIndex}
            type="button"
            className={quantity - 6 + pageIndex + 1 === page ? "active" : undefined}
            onClick={() => handleSetPage(quantity - 6 + pageIndex + 1)}
          >
            {quantity - 5 + pageIndex}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="pagination">
      {Array.from(Array(quantity).keys()).map((pageIndex) => (
        <button
          key={pageIndex}
          type="button"
          className={pageIndex + 1 === page ? "active" : undefined}
          onClick={() => handleSetPage(pageIndex + 1)}
        >
          {pageIndex + 1}
        </button>
      ))}
    </div>
  );
}

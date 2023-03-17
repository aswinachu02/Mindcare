import { Button, Empty, Result, Row, Spin } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../utils/routes";

const LoadAndResult = ({
  children = <></>,
  loading = true,
  isNotFound = false,
  isEmpty = false,
  loadingText = "",
  notFoundText = "",
  emptyText = "",
}) => {
  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <Row align="middle" justify="center" className="h-[50vh]">
          <Spin className="text-themeColor" tip={loadingText} />
        </Row>
      ) : isNotFound || isEmpty ? (
        isNotFound ? (
          <Result
            status="error"
            title={notFoundText}
            extra={
              <Row justify="space-between">
                <Button size="large" type="ghost" onClick={() => navigate(-1)}>
                  Go Back
                </Button>

                <Button
                  size="large"
                  type="danger"
                  onClick={() => navigate(routes.HOME)}
                >
                  Return Home
                </Button>
              </Row>
            }
          />
        ) : (
          <div className="h-[50vh] px-8 flex flex-col items-center justify-center w-full">
            <Empty description={emptyText} />
            <Row className="w-full mt-10" justify="space-between">
              <Button size="large" type="ghost" onClick={() => navigate(-1)}>
                Go Back
              </Button>

              <Button size="large" type="danger" onClick={() => navigate(0)}>
                Reload
              </Button>
            </Row>
          </div>
        )
      ) : (
        children
      )}
    </>
  );
};

export default LoadAndResult;

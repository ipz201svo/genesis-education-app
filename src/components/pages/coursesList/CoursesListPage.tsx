import { useQuery } from "react-query";
import { getCourses } from "../../../api/previewCoursesApi";
import { Grid, Pagination, PaginationItem, Box, Container, Alert } from "@mui/material";
import CourseTile from "./courseTile";
import { Link, useSearchParams } from "react-router-dom";
import { useTitle } from "../../common/hooks";
import { useEffect, useState } from "react";
import Loader from "../../common/Loader";

const count = 10;

const CoursesListPage = () => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const [pagesCount, setPagesCount] = useState(1);

  const { data, isLoading, isError, isSuccess } = useQuery(["courses", page, count], () => getCourses(page - 1, count), { cacheTime: 60_000 });

  useTitle('Courses');

  useEffect(() => {
    if (!isLoading)
      setPagesCount(Math.ceil(data!.totalCount / count));
  }, [data, isLoading])

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {isLoading && (
            <Grid item xs={12} >
              <Loader />
            </Grid>
          )}
          {isError && (
            <Grid item xs={12} >
              <Alert severity="error">Error. Something went wrong</Alert>
            </Grid>
          )}
          {isSuccess && data!.courses.map(course => (
            <Grid item key={course.id} xs={12}>
              <CourseTile course={course} />
            </Grid>
          ))}
        </Grid>
        {(pagesCount > 1) && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination
              page={page}
              count={pagesCount}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          </Box>
        )}
      </Container>
    </>
  );
};

export default CoursesListPage;

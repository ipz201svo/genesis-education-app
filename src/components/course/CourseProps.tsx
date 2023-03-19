import { Divider, Stack, Typography } from '@mui/material'

type Props = {
  props: string[],
};

const CourseProps = ({ props }: Props) => {
  return (
    <Stack
      mt={1}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={1}
    >
      {props.map((prop, i) => <Typography key={i} variant="body2" color="text.secondary">{prop}</Typography>)}
    </Stack>
  )
}

export default CourseProps

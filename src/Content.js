import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Content({ submissions }) {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4" gutterBottom>
        Liked Form Submissions
      </Typography>

      {submissions.length === 0 ? (
        <Typography variant="body1" sx={{ fontStyle: "italic", marginTop: 1 }}>
          No liked submissions yet.
        </Typography>
      ) : (
        <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
          <List>
            {submissions.map((submission) => (
              <ListItem key={submission.id} divider>
                <ListItemText
                  primary={`${submission.data.firstName} ${submission.data.lastName}`}
                  secondary={submission.data.email}
                />
                <IconButton color="error">
                  <FavoriteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}

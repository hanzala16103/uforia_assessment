// import React from "react";
// import Container from "@mui/material/Container";

// import Header from "./Header";
// import Content from "./Content";

// function App() {
//   return (
//     <>
//       <Header />
//       <Container>
//         <Content />
//       </Container>
//     </>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Header from "./Header";
import Content from "./Content";
import ToastNotification from "./ToastNotification";
import useLikedSubmissions from "./useLikedSubmissions";
import { onMessage } from "./service/mockServer";

function App() {
  const { likedSubmissions, addLikedSubmission } = useLikedSubmissions();
  const [newSubmission, setNewSubmission] = useState(null);
  const [openToast, setOpenToast] = useState(false);

  useEffect(() => {
    const handleNewSubmission = (submission) => {
      setNewSubmission(submission);
      setOpenToast(true);
    };

    onMessage(handleNewSubmission);
  }, []);

  const handleLike = () => {
    if (!newSubmission) return;

    const updatedSubmission = {
      ...newSubmission,
      data: { ...newSubmission.data, liked: true },
    };
    addLikedSubmission(updatedSubmission);
    dismissToast();
  };

  const dismissToast = () => {
    setOpenToast(false);
    setNewSubmission(null);
  };

  return (
    <>
      <Header />
      <Container>
        <Content submissions={likedSubmissions} />
      </Container>

      <ToastNotification
        submission={newSubmission}
        open={openToast}
        onClose={dismissToast}
        onLike={handleLike}
      />
    </>
  );
}

export default App;

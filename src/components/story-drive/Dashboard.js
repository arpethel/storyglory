import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import AddFolderButton from "./AddFolderButton";
import Folder from "./Folder";
import { useFolder } from "../../hooks/useFolder";
import { useParams } from 'react-router-dom'

export default function Dashboard() {
  const { folderId } = useParams()
  const { folder, childFolders } = useFolder(folderId);
  console.log(childFolders)

  return (
      <>
      <Header />
      <Container fluid>
        <AddFolderButton currentFolder={folder}/>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div key={childFolder.id} style={{ maxWidth: '250px' }} className="p-2">
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
      </>
  );
}

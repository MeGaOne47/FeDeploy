import React from 'react';
import { FacebookOutlined, GithubOutlined, YoutubeOutlined } from '@ant-design/icons';

const FooterComponent: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', backgroundColor: '#f0f2f5', padding: '20px 0', position: 'fixed', left: 0, bottom: 0, width: '100%'  }}>
      <div>Ant Design ©2022 Created by Ant UED</div>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100028399301933" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined />
        </a>{" | "}
        <a href="https://github.com/MeGaOne47" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>{" | "}
        <a href="https://www.youtube.com/channel/UC2lPzjPXjeV2HoRPI2IJuiQ" target="_blank" rel="noopener noreferrer">
          <YoutubeOutlined />
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;


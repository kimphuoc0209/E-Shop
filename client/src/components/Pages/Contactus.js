import * as React from "react";
import owner from "../../images/Logo.png";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contactus = () => {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 320,
          bgcolor: "background.paper",
          m: "0 auto",
        }}
        className="contactList"
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                style={{ width: "100%", height: "100%" }}
                src={owner}
                alt="Logo"
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="E - Digitic" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <a href="mailto:shiroutran@gmail.com">shiroutran@gmail.com</a>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="+84335710477" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WhatsAppIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="+84335710477" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="02 Vo Oanh, Ward 25, Binh Thanh District, Ho Chi Minh City" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <GitHubIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <a href="https://github.com/kimphuoc0209" target="_blank">
                https://github.com/kimphuoc0209
              </a>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LinkedInIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <a href="https://www.linkedin.com/in/kim-ph%C6%B0%E1%BB%9Bc-tr%E1%BA%A7n-894019238/" target="_blank">
                https://www.linkedin.com/in/kim-ph%C6%B0%E1%BB%9Bc-tr%E1%BA%A7n-894019238/
              </a>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FacebookIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <a href="https://www.facebook.com/profile.php?id=100010785099393" target="_blank">
                https://www.facebook.com/profile.php?id=100010785099393
              </a>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <InstagramIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <a href="https://www.instagram.com/kpdaystar/" target="_blank">
                https://www.instagram.com/kpdaystar/
              </a>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </>
  );
};

export default Contactus;

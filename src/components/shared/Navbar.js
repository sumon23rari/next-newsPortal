"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from "@/asstes/freeNews.png"
import Button from '@mui/material/Button';
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import Header from './Header';
const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/categories/news?category=all-news",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "About",
    pathname: "/about",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];


function Navbar() {


  return (
<>
<Header></Header>
<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
     <Image src={logo} width={60} height={60} alt="logo"/>
          <Box className="w-full text-center">
            {navItems.map((item) => (
            <Link key={item} href={item.pathname} >
              <Button className='text-white'>{item.route} </Button>
            </Link>
            ))}
          </Box>
<Box>
  <Stack direction="row" sx={{
    "& svg":{
      color:"white"
    }
  }}>
<IconButton>
  <FacebookIcon></FacebookIcon>
</IconButton>
<IconButton>
  <FacebookIcon></FacebookIcon>
</IconButton>
<IconButton>
  <FacebookIcon></FacebookIcon>
</IconButton>
<IconButton>
  <FacebookIcon></FacebookIcon>
</IconButton>
</Stack>
</Box>
        
        </Toolbar>
      </Container>
    </AppBar>
</>
  );
}
export default Navbar;
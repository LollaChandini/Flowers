import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography, Container, Grid, Box, Card, CardContent, CardMedia, CardActions, Paper, Avatar, TextField, Link } from '@mui/material';
import { Menu as MenuIcon, Favorite, ShoppingCart, Person, Facebook, Twitter, Instagram } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#6333bb",
    },
  },
});

function Header() {
  const [hoveredImage1, setHoveredImage1] = useState(null);
  const [hoveredImage2, setHoveredImage2] = useState(null);
  const [hoveredImage3, setHoveredImage3] = useState(null);
  const [hoveredImage4, setHoveredImage4] = useState(null);
  const [hoveredImage5, setHoveredImage5] = useState(null);
  const [hoveredImage6, setHoveredImage6] = useState(null);
  const [hoveredImage7, setHoveredImage7] = useState(null);
  const [hoveredImage8, setHoveredImage8] = useState(null);
  const [hoveredImage9, setHoveredImage9] = useState(null);
  const [hoveredImage10, setHoveredImage10] = useState(null);
  const [activeButton, setActiveButton] = useState("home");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const handleMouseEnter1 = () => {
    setHoveredImage1("https://www.fnp.com/images/pr/l/v200/royal-orchid-daisy-embrace_2.jpg");
  };
  const handleMouseLeave1 = () => {
    setHoveredImage1(null);
  };
  const handleMouseEnter2 = () => {
    setHoveredImage2("https://www.fnp.com/images/pr/l/v200/sweet-expression-floral-arrangement_2.jpg");
  };
  const handleMouseLeave2 = () => {
    setHoveredImage2(null);
  };
  const handleMouseEnter3 = () => {
    setHoveredImage3("https://www.fnp.com/images/pr/l/v200/paradise-on-earth-carnations-bouquet_2.jpg");
  };
  const handleMouseLeave3 = () => {
    setHoveredImage3(null);
  };
  const handleMouseEnter4 = () => {
    setHoveredImage4("https://www.fnp.com/images/pr/l/v200/mystical-land-roses-n-orchids-potli_2.jpg");
  };
  const handleMouseLeave4 = () => {
    setHoveredImage4(null);
  };
  const handleMouseEnter5 = () => {
    setHoveredImage5("https://www.fnp.com/images/pr/l/v200/pink-roses-and-carnations-in-love-you-sticker-vase_2.jpg");
  };
  const handleMouseLeave5 = () => {
    setHoveredImage5(null);
  };
  const handleMouseEnter6 = () => {
    setHoveredImage6("https://www.fnp.com/images/pr/l/v200/pink-roses-daisy-bouquet_3.jpg");
  };
  const handleMouseLeave6 = () => {
    setHoveredImage6(null);
  };
  const handleMouseEnter7 = () => {
    setHoveredImage7("https://www.fnp.com/images/pr/l/v200/happy-times-carnations-bouquet_2.jpg");
  };
  const handleMouseLeave7 = () => {
    setHoveredImage7(null);
  };
  const handleMouseEnter8 = () => {
    setHoveredImage8("https://www.fnp.com/images/pr/l/v200/romantic-union-of-roses-and-gerberas_2.jpg");
  };
  const handleMouseLeave8 = () => {
    setHoveredImage8(null);
  };
  const handleMouseEnter9 = () => {
    setHoveredImage9("https://www.fnp.com/images/pr/l/v200/lily-and-crimson-love-embrace_2.jpg");
  };
  const handleMouseLeave9 = () => {
    setHoveredImage9(null);
  };
  const handleMouseEnter10 = () => {
    setHoveredImage10("https://www.fnp.com/images/pr/l/v200/opulent-rose-serenade_2.jpg");
  };
  const handleMouseLeave10 = () => {
    setHoveredImage10(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid>
      <AppBar
      position="fixed"
      sx={{
        bgcolor: 'white',
        color: 'text.primary',
        boxShadow: 1
      }}
    >
      <Toolbar>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://t4.ftcdn.net/jpg/03/20/72/69/240_F_320726945_LkRr3dUyELmwPLnhkx7pfMH5wTduCqvN.jpg"
            alt="Beautiful flowers"
            sx={{
              width: 'auto',
              height: 50,
              objectFit: 'contain'
            }}
          />
        </Grid>
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            fontSize: 20,
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            letterSpacing: 1.2
          }}
        >
          𝐅𝐥𝐨𝐰𝐞𝐫 𝐅𝐮𝐬𝐢𝐨𝐧
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            href="#home"
            onClick={() => handleButtonClick("home")}
            sx={{
              fontFamily: "Georgia, serif",
              fontWeight: 500,
              fontSize: 15,
              backgroundColor: activeButton === "home" ? "#6333bb" : "transparent",
              color: activeButton === "home" ? "white" : "inherit",
              "&:hover": {
                backgroundColor: "#e0e0e0"
              }
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            href="#about"
            onClick={() => handleButtonClick("about")}
            sx={{
              fontFamily: "Georgia, serif",
              fontWeight: 500,
              fontSize: 15,
              backgroundColor: activeButton === "about" ? "#6333bb" : "transparent",
              color: activeButton === "about" ? "white" : "inherit",
              "&:hover": {
                backgroundColor: "#e0e0e0"
              }
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            href="#products"
            onClick={() => handleButtonClick("products")}
            sx={{
              fontFamily: "Georgia, serif",
              fontWeight: 500,
              fontSize: 15,
              backgroundColor: activeButton === "products" ? "#6333bb" : "transparent",
              color: activeButton === "products" ? "white" : "inherit",
              "&:hover": {
                backgroundColor: "#e0e0e0"
              }
            }}
          >
            Products
          </Button>
          <Button
            color="inherit"
            href="#review"
            onClick={() => handleButtonClick("review")}
            sx={{
              fontFamily: "Georgia, serif",
              fontWeight: 500,
              fontSize: 15,
              backgroundColor: activeButton === "review" ? "#6333bb" : "transparent",
              color: activeButton === "review" ? "white" : "inherit",
              "&:hover": {
                backgroundColor: "#e0e0e0"
              }
            }}
          >
            Review
          </Button>
          <Button
            color="inherit"
            href="#contact"
            onClick={() => handleButtonClick("contact")}
            sx={{
              fontFamily: "Georgia, serif",
              fontWeight: 500,
              fontSize: 15,
              backgroundColor: activeButton === "contact" ? "#6333bb" : "transparent",
              color: activeButton === "contact" ? "white" : "inherit",
              "&:hover": {
                backgroundColor: "#e0e0e0"
              }
            }}
          >
            Contact
          </Button>
          <IconButton
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "#e0e0e0"
              },
              "&:active": {
                backgroundColor: "#6333bb",
                color: "white",
              }
            }}
          >
            <Favorite />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "#e0e0e0"
              },
              "&:active": {
                backgroundColor: "#6333bb",
                color: "white",
              }
            }}
          >
            <ShoppingCart />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "#e0e0e0"
              },
              "&:active": {
                backgroundColor: "#6333bb",
                color: "white",
              }
            }}
          >
            <Person />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
        {/* Home */}
        <Box id="home" sx={{ bgcolor: "#edd0bc", py: 8 }}>
          <Container>
            <Grid container alignItems="center" spacing={4}>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-red-flower-illustration-png-image_11599092.png"
                  alt="Beautiful flowers"
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: 30 }}
                >
                  Fresh Flowers
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 20, color: "#6333bb" }}>
                  Natural & beautiful flowers
                </Typography>
                <Typography paragraph sx={{ fontFamily: "Georgia, serif", fontSize: 15, }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  eveniet aliquid accusamus culpa adipisci excepturi, Itaque,
                  molestiae voluptatem!
                </Typography>
                <Button variant="contained" href="#products" sx={{
                  fontFamily: "Georgia, serif", fontSize: 15, backgroundColor: "black",
                  "&:hover": { backgroundColor: "#6333bb" }
                }} >
                  Shop Now
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* About */}
        <Container id="about" sx={{ py: 9, textAlign: "center" }}>
          <Typography variant="body1" component="body1" gutterBottom sx={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: 30 }}>
            About  <span style={{ color: '#6333bb' }}>Us</span>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <img src="https://www.flowerchimp.com.ph/cdn/shop/products/puffy-purple-22826352050361_1946x.jpg?v=1626848561" style={{ width: '60%', height: "auto" }} alt="Best flowers sellers" />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" mt={2} sx={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: 30, color: "#6333bb" }}>Best flowers sellers</Typography>
              <Typography variant="body1" sx={{ fontFamily: "Georgia, serif", fontWeight: 600, fontSize: 20, marginTop: 1 }}>Why choose us?</Typography>
              <Typography paragraph sx={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 17 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nam cumque quasi autem blanditiis eaque laboriosam, neque alias sequi! Minus voluptatem expedita incidunt amet vel repellendus rem nisi minima animi?
              </Typography>
              <Typography paragraph sx={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 17 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo illum perferendis sapiente iusto distinctio! Esse maxime laborum vero, eligendi, sint impedit nulla fugit fugiat qui harum sapiente natus cum.
              </Typography>
              <Button variant="contained" sx={{
                fontFamily: "Georgia, serif", fontSize: 15, backgroundColor: "black",
                "&:hover": { backgroundColor: "#6333bb" }
              }} >
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>

        {/* products */}
        <Container id="products" sx={{ py: 6, textAlign: "center" }} >
          <Box sx={{ bgcolor: 'white', py: 5, textAlign: "center", }}>
            <Typography variant="body1" component="body1" gutterBottom sx={{
              fontFamily: "Georgia, serif", fontSize: 30, fontWeight: 800
            }}>
              Latest <span style={{ color: "#6333bb", }}>Products</span>
            </Typography>
            <Grid container spacing={6} justifyContent="center" sx={{ marginTop: 1 }}>
              {/* Product 1 */}
              <Grid item xs={12} md={2} >
                <Card
                  sx={{ height: "100%", position: "relative", maxWidth: 300 }}
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={hoveredImage1 ? hoveredImage1 : "https://www.fnp.com/images/pr/l/v200/royal-orchid-daisy-embrace_1.jpg"}
                    alt="10 days returns"
                    style={{ objectFit: "cover" }}
                  />
                  {hoveredImage1 && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" sx={{ marginBottom: 1 }}>
                        <span style={{ textDecoration: "line-through", marginRight: "5px" }}>$23.99</span>{" "}
                        $20.99
                      </Typography>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                    </Box>
                  )}
                </Card>
              </Grid>

              {/* Product 2 */}
              <Grid item xs={12} md={2}>
                <Card
                  sx={{ height: "100%", position: "relative", maxWidth: 300 }}
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={hoveredImage2 ? hoveredImage2 : "https://www.fnp.com/images/pr/l/v200/sweet-expression-floral-arrangement_1.jpg"}
                    alt="Secure payments"
                    style={{ objectFit: "cover" }}
                  />
                  {hoveredImage2 && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                        <span style={{ textDecoration: "line-through", marginRight: "5px" }}>$17.99</span>{" "}
                        $15.99
                      </Typography>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                    </Box>
                  )}
                </Card>
              </Grid>

              {/* Product 3 */}
              <Grid item xs={12} md={2}>
                <Card
                  sx={{ height: "100%", position: "relative", maxWidth: 300 }}
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={hoveredImage3 ? hoveredImage3 : "https://www.fnp.com/images/pr/l/v200/paradise-on-earth-carnations-bouquet_1.jpg"}
                    alt="Free delivery"
                    style={{ objectFit: "cover" }}
                  />
                  {hoveredImage3 && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                        <span style={{ textDecoration: "line-through", marginRight: "5px" }}>$15.99</span>{" "}
                        $13.99
                      </Typography>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                    </Box>
                  )}
                </Card>
              </Grid>

              {/* Product 4 */}
              <Grid item xs={12} md={2}>
                <Card
                  sx={{ height: "100%", position: "relative", maxWidth: 300 }}
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={hoveredImage4 ? hoveredImage4 : "https://www.fnp.com/images/pr/l/v200/mystical-land-roses-n-orchids-potli_1.jpg"}
                    alt="10 days returns"
                    style={{ objectFit: "cover" }}
                  />
                  {hoveredImage4 && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                        <span style={{ textDecoration: "line-through", marginRight: "5px" }}>$16.99</span>{" "}
                        $14.99
                      </Typography>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                    </Box>
                  )}
                </Card>
              </Grid>

              {/* Product 5 */}
              <Grid item xs={12} md={2}>
                <Card
                  sx={{ height: "100%", position: "relative", maxWidth: 300 }}
                  onMouseEnter={handleMouseEnter5}
                  onMouseLeave={handleMouseLeave5}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={hoveredImage5 ? hoveredImage5 : "https://www.fnp.com/images/pr/l/v200/pink-roses-and-carnations-in-love-you-sticker-vase_1.jpg"}
                    alt="10 days returns"
                    style={{ objectFit: "cover" }}
                  />
                  {hoveredImage5 && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                        <span style={{ textDecoration: "line-through", marginRight: "5px" }}>$18.99</span>{" "}
                        $17.99
                      </Typography>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                    </Box>
                  )}
                </Card>
              </Grid>
            </Grid>
          </Box>


          <Box sx={{ bgcolor: 'white', py: 4, textAlign: "center", }}>
            <Grid container spacing={6} justifyContent="center">
              {/* Product 6 */}
              <Grid item xs={12} md={2} >
                <Card
                  sx={{ height: "100%", position: "relative", maxWidth: 300 }}
                  onMouseEnter={handleMouseEnter6}
                  onMouseLeave={handleMouseLeave6}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={hoveredImage6 ? hoveredImage6 : "https://www.fnp.com/images/pr/l/v200/pink-roses-daisy-bouquet_1.jpg"}
                    alt="10 days returns"
                    style={{ objectFit: "cover" }}
                  />
                  {hoveredImage6 && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                        <span style={{ textDecoration: "line-through", marginRight: "5px" }}>$20.50</span>{" "}
                        $18.50
                      </Typography>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                    </Box>
                  )}
                </Card>
              </Grid>

              {/* Product 7 */}
              <Grid item xs={12} md={2}>
                <Card
                  sx={{ height: "100%", position: "relative", maxWidth: 300 }}
                  onMouseEnter={handleMouseEnter7}
                  onMouseLeave={handleMouseLeave7}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={hoveredImage7 ? hoveredImage7 : "https://www.fnp.com/images/pr/l/v200/happy-times-carnations-bouquet_1.jpg"}
                    alt="Secure payments"
                    style={{ objectFit: "cover" }}
                  />
                  {hoveredImage7 && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                        <span style={{ textDecoration: "line-through", marginRight: "5px" }}>$14.99</span>{" "}
                        $13.59
                      </Typography>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                    </Box>
                  )}
                </Card>
              </Grid>

              {/* Product 8 */}
              <Grid item xs={12} md={2}>
                <Card
                  sx={{ height: "100%", position: "relative", maxWidth: 300 }}
                  onMouseEnter={handleMouseEnter8}
                  onMouseLeave={handleMouseLeave8}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={hoveredImage8 ? hoveredImage8 : "https://www.fnp.com/images/pr/l/v200/romantic-union-of-roses-and-gerberas_1.jpg"}
                    alt="Free delivery"
                    style={{ objectFit: "cover" }}
                  />
                  {hoveredImage8 && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                        <span style={{ textDecoration: "line-through", marginRight: "5px" }}>$21.88</span>{" "}
                        $20.66
                      </Typography>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                    </Box>
                  )}
                </Card>
              </Grid>

              {/* Product 9 */}
              <Grid item xs={12} md={2}>
                <Card
                  sx={{ height: "100%", position: "relative", maxWidth: 300 }}
                  onMouseEnter={handleMouseEnter9}
                  onMouseLeave={handleMouseLeave9}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={hoveredImage9 ? hoveredImage9 : "https://www.fnp.com/images/pr/l/v200/lily-and-crimson-love-embrace_1.jpg"}
                    alt="10 days returns"
                    style={{ objectFit: "cover" }}
                  />
                  {hoveredImage9 && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                        <span style={{ textDecoration: "line-through", marginRight: "5px" }}>$12.99</span>{" "}
                        $11.80
                      </Typography>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                    </Box>
                  )}
                </Card>
              </Grid>

              {/* Product 10 */}
              <Grid item xs={12} md={2}>
                <Card
                  sx={{ height: "100%", position: "relative", maxWidth: 300 }}
                  onMouseEnter={handleMouseEnter10}
                  onMouseLeave={handleMouseLeave10}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={hoveredImage10 ? hoveredImage10 : "https://www.fnp.com/images/pr/l/v200/opulent-rose-serenade_1.jpg"}
                    alt="10 days returns"
                    style={{ objectFit: "cover" }}
                  />
                  {hoveredImage10 && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                        <span style={{ textDecoration: "line-through", marginRight: "5px" }}>$18.99</span>{" "}
                        $17.99
                      </Typography>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                    </Box>
                  )}
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>


        {/* Reviews */}
        <Container id="review" sx={{ py: 6, textAlign: "center" }} >
          <Typography variant="body1" component="body1" gutterBottom sx={{ fontFamily: "Georgia, serif", fontWeight: 600, fontSize: 30, }}>
            Customer's <span style={{ color: '#6333bb' }}>Review</span>
          </Typography>
          <Grid container spacing={4} sx={{ marginTop: 1 }}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <Avatar src="https://getimagehub.com/wp-content/uploads/2023/12/Girls-Whatsapp-Dp-with-Phone.webp" sx={{ width: 56, height: 56, mx: 'auto' }} />
                <Typography variant="body1" mt={2} sx={{ fontFamily: "Georgia, serif", fontWeight: 600, fontSize: 20, }}>Evelyn</Typography>
                <Box display="flex" justifyContent="center" my={1}>
                  ⭐⭐⭐⭐⭐
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 15, }}>
                  The service was excellent and the flowers were beautiful. Will definitely order again!
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmI0vYMU5_vGn0HzT3I7Am4e9sy_-FLwHB25aA5VXX8mAJr_poXRMRuBgDEgOBfC5Et0&usqp=CAU" sx={{ width: 56, height: 56, mx: 'auto' }} />
                <Typography variant="body1" mt={2} sx={{ fontFamily: "Georgia, serif", fontWeight: 600, fontSize: 20, }}>Emma</Typography>
                <Box display="flex" justifyContent="center" my={1}>
                  ⭐⭐⭐⭐⭐
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 15, }}>
                  Great selection of flowers and quick delivery. Very satisfied with my purchase.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <Avatar src="https://cdn4.sharechat.com/sc_compressed_gm_40_a3jigMTc4MjIyMDM2NQ.jpg?tenant=sc&referrer=pwa-sharechat-service&f=MDM2NQ.jpg" sx={{ width: 56, height: 56, mx: 'auto' }} />
                <Typography variant="body1" mt={2} sx={{ fontFamily: "Georgia, serif", fontWeight: 600, fontSize: 20, }}>Sophia</Typography>
                <Box display="flex" justifyContent="center" my={1}>
                  ⭐⭐⭐⭐⭐
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 15, }}>
                  The flowers were fresh and vibrant. Customer service was also very helpful.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        {/* Contact */}
        <Container id="contact" sx={{ py: 7, textAlign: 'center' }}>
          <Typography variant="body1" component="body1" gutterBottom sx={{ fontFamily: "Georgia, serif", fontWeight: 600, fontSize: 30 }}>
            Contact <span style={{ color: '#6333bb' }}>Us</span>
          </Typography>
          <Box component="form" sx={{ maxWidth: 600, mx: 'auto' }}>
            <TextField label="Name*" variant="outlined" fullWidth margin="normal" />
            <TextField label="Email*" variant="outlined" fullWidth margin="normal" />
            <TextField label="Message*" variant="outlined" fullWidth margin="normal" multiline rows={4} />
            <Button variant="contained" sx={{
              fontFamily: "Georgia, serif", fontSize: 15, backgroundColor: "black",
              "&:hover": { backgroundColor: "#6333bb" }
            }} >
              Send Message
            </Button>
          </Box>
        </Container>

        {/* Footer */}
        <Box sx={{ bgcolor: 'black', color: 'white', py: 4, textAlign: 'center' }}>
          <Typography variant="body1" gutterBottom>
            FlowerFusion.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Copyright &copy; 2024 FlowerFusion
          </Typography>
          <Box>
            <IconButton color="inherit" component={Link} href="#"><Facebook /></IconButton>
            <IconButton color="inherit" component={Link} href="#"><Twitter /></IconButton>
            <IconButton color="inherit" component={Link} href="#"><Instagram /></IconButton>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider >
  );
}

export default Header;

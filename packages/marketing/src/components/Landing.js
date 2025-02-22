import React from "react";
import { useReward } from "react-rewards";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MaterialLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MaterialLink component={Link} to="/" color="inherit">
        Your Website
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  spanConfeti: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  footer: {
    margin: "0 auto",
    width: "100%",
    maxWidth: "40%",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    id: 1,
    title: "Gol Incrível",
    description:
      "Um gol de placa marcado no último minuto, levando a torcida ao delírio.",
    image:
      "https://foothub.com.br/wp-content/uploads/2024/03/image-46-768x432.png",
  },
  {
    id: 2,
    title: "Defesa Espetacular",
    description:
      "O goleiro fez uma defesa inacreditável, salvando o time de uma derrota certa.",
    image:
      "https://foothub.com.br/wp-content/uploads/2024/03/image-45-1024x660.png",
  },
  {
    id: 3,
    title: "Drible Desconcertante",
    description:
      "Um drible que deixou o adversário no chão, arrancando aplausos da torcida.",
    image: "https://foothub.com.br/wp-content/uploads/2024/03/image-37.png",
  },
  {
    id: 4,
    title: "Passe Preciso",
    description:
      "Um passe milimétrico que resultou em gol, mostrando a habilidade do jogador.",
    image: "https://foothub.com.br/wp-content/uploads/2024/03/image-38.png",
  },
  {
    id: 5,
    title: "Jogo Histórico",
    description:
      "Uma partida que entrou para a história do futebol, cheia de emoções e reviravoltas.",
    image: "https://foothub.com.br/wp-content/uploads/2024/03/image-41.png",
  },
  {
    id: 6,
    title: "Torcida Apaixonada",
    description:
      "A torcida fez a diferença com seu apoio incondicional, empurrando o time para a vitória.",
    image: "https://foothub.com.br/wp-content/uploads/2024/03/image-42.png",
  },
  {
    id: 7,
    title: "Técnico Visionário",
    description:
      "O técnico fez uma substituição que mudou o jogo, mostrando sua visão estratégica.",
    image: "https://foothub.com.br/wp-content/uploads/2024/03/image-43.png",
  },
  {
    id: 8,
    title: "Campeonato Memorável",
    description:
      "Um campeonato cheio de emoções e surpresas, com jogos inesquecíveis.",
    image: "https://foothub.com.br/wp-content/uploads/2025/01/image-9.png",
  },
  {
    id: 9,
    title: "Craque do Jogo",
    description:
      "O jogador foi eleito o melhor em campo, destacando-se com sua performance brilhante.",
    image: "https://foothub.com.br/wp-content/uploads/2025/01/image-11.png",
  },
];

export default function Album() {
  const classes = useStyles();
  const { reward, isAnimating } = useReward("rewardId", "confetti");

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <span id="rewardId" className={classes.spanConfeti} />
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="caption"
              align="center"
              color="secondary"
              gutterBottom
            >
              Emoção. Paixão. Vitória. Futebol.
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
              gutterBottom
            >
              Experiência de Futebol Incrível com Tecnologia de Ponta{" "}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Descubra a emoção do futebol com nossa tecnologia de ponta. Veja
              gols incríveis, defesas espetaculares e dribles desconcertantes.
              Tudo isso com a melhor qualidade de imagem e som.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      Preços
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="outlined" color="primary">
                      Preços
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      color="primary"
                      component="h6"
                    >
                      {card.title}
                    </Typography>
                    <Typography color="textSecondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      variant="text"
                      disabled={isAnimating}
                      onClick={reward}
                    >
                      Saiba mais 🎉
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Sobre o Futebolize
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          O Futebolize traz a emoção do futebol para você com a melhor
          tecnologia. Acompanhe gols, defesas e dribles inesquecíveis com
          qualidade de imagem e som de ponta.
        </Typography>
        <br />
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

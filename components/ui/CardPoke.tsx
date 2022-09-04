import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"
import { SmallPokemon } from "../../interfaces"


export const CardPoke: FC<SmallPokemon> = ({ name, id, img }) => {

    const router = useRouter();
    const handleClick = () => {
        router.push(`/pokemon/${id}`);
    }

    return (
        <Grid xs={12} sm={4} md={3} lg={2} key={id} css={{ margin: '$5' }}>
            <Card isHoverable isPressable onClick={() => handleClick()}>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={img}
                        objectFit="contain"
                        width="100%"
                        height={200}
                        alt={name}
                    />
                </Card.Body>

                <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b transform="capitalize">{name}</Text>
                        <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                            {id}
                        </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}

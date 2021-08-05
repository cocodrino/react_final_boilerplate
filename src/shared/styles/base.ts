import styled from "styled-components/macro"
import {Button} from "rsuite";



export const SButton = styled.button({
    padding:10,
    backgroundColor: "blue",
    borderRadius: "10px solid blue",
    color: "white"
})

export const SExtendedButton = styled(Button)({
    margin: "20px 0 20px 0",
    display: "block"
})
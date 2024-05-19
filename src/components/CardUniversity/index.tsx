import { FC } from "react";
import { IUniversity } from "../DynamicPagination/university.interface";
import { styled } from "styled-components";

const CardStyled = styled.li`
    height: 50px;
    color: #ffffff;
    list-style-type: auto;
`

const CardUniversity: FC <{data: IUniversity}> = ({data}) => (
    <>
        <CardStyled>
                {data.country} - {data.name}
        </CardStyled>
    </>
)
export default CardUniversity
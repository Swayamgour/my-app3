
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import s from '@/styles/MobDetail.module.css'

export default function ModileDetail({ FirstModDetail2, FirstModDetail }: any) {



    let result = FirstModDetail?.specs[0] !== undefined ? true : FirstModDetail2?.specs[0] !== undefined ? FirstModDetail2?.specs[0].key : false;
    let result1 = FirstModDetail?.specs[1] !== undefined ? true : FirstModDetail2?.specs[1] !== undefined ? FirstModDetail2?.specs[1].key : false;
    let result2 = FirstModDetail?.specs[2] !== undefined ? true : FirstModDetail2?.specs[2] !== undefined ? FirstModDetail2?.specs[2].key : false;
    let result3 = FirstModDetail?.specs[3] !== undefined ? true : FirstModDetail2?.specs[3] !== undefined ? FirstModDetail2?.specs[3].key : false;

    // console.log(result2, result3 , FirstModDetail?.specs[2] !== undefined);

    // console.log(FirstModDetail?.specs[0].key === FirstModDetail2?.specs[0].key);
    // let value = FirstModDetail?.specs[0] && FirstModDetail?.specs[0].key === FirstModDetail2?.specs[0] && FirstModDetail2?.specs[0].key
    // let value1 = FirstModDetail?.specs[1] && FirstModDetail?.specs[1].key === FirstModDetail2?.specs[1] && FirstModDetail2?.specs[1].key
    // let value2 = FirstModDetail?.specs[2] && FirstModDetail?.specs[2].key === FirstModDetail2?.specs[2] && FirstModDetail2?.specs[2].key
    // let value3 = FirstModDetail?.specs[3] && FirstModDetail?.specs[3].key === FirstModDetail2?.specs[3] && FirstModDetail2?.specs[3].key
    // // let value4 = FirstModDetail?.specs[4] && FirstModDetail?.specs[4].key === FirstModDetail2?.specs[4] && FirstModDetail2?.specs[4].key

    // console.log(value , value1);

    return (
        <div className={s.ModDetail}>
            <Accordion expanded={true}>
                <AccordionSummary
                   
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>{FirstModDetail?.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    {result && 
                        <>
                            <h4 className={s.headingg} style={{ marginTop: '1px' }}>{FirstModDetail?.specs[0] ? FirstModDetail?.specs[0].key : FirstModDetail2?.specs[0].key}</h4>
                            <div className={s.Camtainer}>
                                <h4 className={s.heading} >{FirstModDetail?.specs[0] ? FirstModDetail?.specs[0].key : '-'}</h4>
                                <h4 className={s.heading} >{FirstModDetail2?.specs[0] ? FirstModDetail2?.specs[0].key : '-'}</h4>
                            </div>
                        </>
                    }

                    {result1 &&
                        <>
                            <h4 className={s.headingg} style={{ marginTop: '15px' }}>{FirstModDetail?.specs[1] ? FirstModDetail?.specs[1].key : FirstModDetail2?.specs[1].key}</h4>
                            <div className={s.Camtainer}>
                                <h4 className={s.heading} >{FirstModDetail?.specs[1] ? FirstModDetail?.specs[1].val : '-'}</h4>
                                <h4 className={s.heading} >{FirstModDetail2?.specs[1] ? FirstModDetail2?.specs[1].val : '-'}</h4>
                            </div>
                        </>
                    }

                    {result2 && 
                        <>
                            <h4 className={s.headingg} style={{ marginTop: '15px' }}>{FirstModDetail?.specs[2] ? FirstModDetail?.specs[2].key : FirstModDetail2?.specs[2].key}</h4>
                            <div className={s.Camtainer}>
                                <h4 className={s.heading} >{FirstModDetail?.specs[2] ? FirstModDetail?.specs[2].val : '-'}</h4>
                                <h4 className={s.heading} >{FirstModDetail2?.specs[2] ? FirstModDetail2?.specs[2].val : '-'}</h4>
                            </div>
                        </>
                    }

                    {result3 && 
                        <>
                            <h4 className={s.headingg} style={{ marginTop: '15px' }}>{FirstModDetail?.specs[3] ? FirstModDetail?.specs[3].key : FirstModDetail2?.specs[3].key}</h4>
                            <div className={s.Camtainer}>
                                <h4 className={s.heading} >{FirstModDetail?.specs[3] ? FirstModDetail?.specs[3].val : '-'}</h4>
                                <h4 className={s.heading} >{FirstModDetail2?.specs[3] ? FirstModDetail2?.specs[3].val : '-'}</h4>
                            </div>
                        </>
                    }

                </AccordionDetails>
            </Accordion>
        </div>
    );
}

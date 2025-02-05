import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { HomeStepIds } from 'tours';
import ExpandCollapseStep from './ExpandCollapseStep';
import MovingSquareStep from './MovingSquareStep';
import OpenTourAtStep from './OpenTourAtStep';
import WideTable from './WideTable';

const Section: React.FC<{ title: string; openAtStep: number }> = ({
    title,
    openAtStep,
    children,
}) => (
    <Box bgcolor="primary.main">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center" color="secondary">
                    {title} <OpenTourAtStep step={openAtStep} />
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    </Box>
);

const KitchenSink = () => (
    <>
        <Box width="100%" px={10}>
            <Section title="Track a fast moving object" openAtStep={2}>
                <MovingSquareStep boxId={HomeStepIds.three} />
            </Section>
        </Box>
        <Box width="100%" px={10} mt={8}>
            <Section title="Anchor modal to the container" openAtStep={3}>
                <MovingSquareStep
                    boxId={HomeStepIds.four}
                    containerId={HomeStepIds.fourContainer}
                />
            </Section>
        </Box>
        <Box width="100%" px={10} mt={8}>
            <Section title="Track a morphing object" openAtStep={4}>
                <ExpandCollapseStep
                    verticalId={HomeStepIds.verticalOne}
                    horizontalOneId={HomeStepIds.horizontalOne}
                    horVertOneId={HomeStepIds.horVertOne}
                    containerId={HomeStepIds.expandCollapseContainer}
                />
            </Section>
        </Box>
        <Box width="100%" px={10} mt={8}>
            <Section title="Anchor Modal To the container" openAtStep={7}>
                <ExpandCollapseStep
                    verticalId={HomeStepIds.verticalTwo}
                    horizontalOneId={HomeStepIds.horizontalTwo}
                    horVertOneId={HomeStepIds.horVertTwo}
                    containerId={HomeStepIds.expandCollapseContainerTwo}
                />
            </Section>
        </Box>
        <Box width="100%" px={10} mt={8}>
            <Section title="Wide horizontally scrolling content" openAtStep={10}>
                <WideTable />
            </Section>
        </Box>
    </>
);

export default KitchenSink;

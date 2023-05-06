import { Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { IContent } from '@/interface';
import { getDateTime } from '@/util/global-func';
import { useRouter } from 'next/router';

interface ClientHomeListContentItemProps {
    content: IContent;
}

export const ClientHomeListContentItem = (props: ClientHomeListContentItemProps) => {
    const { content } = props;
    const matches = useMediaQuery('(min-width:900px)');
    const router = useRouter();

    return (
        <Stack
            direction="row"
            sx={{
                gap: '10px',
                transition: 'all ease .5s',
                cursor: 'pointer',
                padding: '10px',
                '&:hover ': {
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                },
            }}
            onClick={() => {
                router.replace(`/content/${content._id}`);
            }}
        >
            <Stack style={{ position: 'relative' }}>
                <Image
                    src={`/services/${content.image}`}
                    width={200 * (matches ? 1 : 0.8)}
                    height={150 * (matches ? 1 : 0.8)}
                    quality={75}
                    style={{
                        objectFit: 'cover',
                        borderRadius: '5px',
                    }}
                    alt="photo"
                />
            </Stack>
            {/* --------------- */}
            <Stack justifyContent="space-between">
                <Stack sx={{ gap: '5px' }}>
                    <Typography sx={{ fontWeight: 700, fontSize: matches ? '16px' : '14px' }}>
                        {content.title}
                    </Typography>

                    <Typography sx={{ fontWeight: 300, fontSize: matches ? '13px' : '11px' }}>
                        {getDateTime(content.created_at)}
                    </Typography>
                </Stack>
                {content.series ? (
                    <Stack
                        sx={{
                            padding: '5px 10px',
                            borderRadius: '5px',
                            border: '2px solid black',
                            width: 'fit-content',
                        }}
                    >
                        <Typography sx={{ fontSize: matches ? '12px' : '10px', fontWeight: 700 }}>
                            {content.series?.title}
                        </Typography>
                    </Stack>
                ) : (
                    <></>
                )}

                <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
                    {content.tags.map((t) => (
                        <Stack
                            key={`tags-${t}`}
                            sx={{
                                padding: '5px',
                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                borderRadius: '5px',
                            }}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography sx={{ fontSize: matches ? '12px' : '10px' }}>
                                {t.name}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

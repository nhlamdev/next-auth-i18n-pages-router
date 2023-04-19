import { useEffect, useState } from 'react';
import { TagsBoxItemComponent } from './item';
import { IoMdAddCircle } from 'react-icons/io';
import { useDebouncedValue } from '@mantine/hooks';
import ApiCaller from '@/api';

export const ManagerSeriesBoxComponent = () => {
    const [value, setValue] = useState<string>('');
    const [filterText, setFilterText] = useState<string>('');
    const [debounced] = useDebouncedValue(filterText, 300, { leading: true });
    const [series, setSeries] = useState<
        {
            created_at: string;
            name: string;
            updated_at: string;
            _id: string;
        }[]
    >([]);

    useEffect(() => {
        ApiCaller.content.getAllSeries(series.length, 10).then((res) => {
            setSeries(res.data);
        });

        return () => {
            setSeries([]);
        };
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                borderRadius: 10,
                gap: 10,
                padding: '20px',
                width: '100%',
            }}
        >
            <span>Danh sách thể loại</span>
            <input
                style={{
                    padding: '10px 20px',
                    border: '1px solid black',
                    borderRadius: 5,
                }}
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                placeholder="Nhập thể loại cần tìm kiếm"
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: 300,
                    minHeight: 300,
                    overflow: 'auto',
                    scrollSnapType: 'y mandatory',
                }}
            >
                {series
                    .filter((s) => s.name.includes(debounced))
                    .map((v) => (
                        <TagsBoxItemComponent
                            key={v._id}
                            value={v}
                            ondelete={() => {
                                ApiCaller.content.deleteSeries(v._id).then((res) => {
                                    setSeries(series.filter((s) => s._id !== v._id));
                                });
                            }}
                        />
                    ))}
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    WebkitFlexDirection: 'row',
                    msFlexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                }}
            >
                <input
                    type="text"
                    style={{
                        flex: 1,
                        padding: '10px',
                        borderBottom: '1px solid black',
                    }}
                    value={value}
                    placeholder="Nhập một thể loại mới"
                    onChange={(e) => {
                        const { value } = e.target;
                        setValue(value);
                    }}
                />
                <IoMdAddCircle
                    style={{ fontSize: 30, cursor: 'pointer' }}
                    onClick={() => {
                        if (value) {
                            ApiCaller.content
                                .createSeries(value)
                                .then((res) => setSeries([...series, res.data]));
                        }
                    }}
                />
            </div>
        </div>
    );
};

import axios from 'axios';
import https from 'https';

export const copyPath = (value: any) => {
    if (window != undefined) {
        navigator.clipboard.writeText(value);
        // setNotify(true, 'Copy đường dẫn thành công!');
    }
};

export const replaceTargetBlank = (htmlString: string): string => {
    return htmlString.replace(/<a\s+([^>]+)>/gi, "<a $1 target='blank'>");
};

export const replaceUrl = (str: string): string => {
    const pattern = /\b(http|https|ftp):\/\/[^\s/$.?#].[^\s]*\b/g;
    return str.replace(pattern, "<a href='$&' style='color: #f3558e;font-style: italic;'>$&</a>");
};

export const showNotification = (title: string, body: string, url: string) => {
    const options = {
        body: body,
        icon: '/static/images/logo/logo.png',
        click_action: url,
    };

    const notification = new Notification(title, options);
    notification;
};

export async function urlExists(url: string): Promise<boolean> {
    try {
        const response = await axios.head(url, {
            httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        });
        return response.status === 200;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function isImageUrl(url: string): Promise<boolean> {
    try {
        const response = await axios.head(url, {
            responseType: 'arraybuffer',
            httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        });
        const contentType = response.headers['content-type'];
        return contentType.startsWith('image/');
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const getNumDateInMonth = (month: number, year: number) => {
    switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return 31;
        case 3:
        case 5:
        case 8:
        case 10:
            return 30;
        case 1:
            return year % 4 === 0 ? 29 : 28;
        default:
            return 30;
    }
};

export const getDateTime = (a: string | null) => {
    const d = a ? new Date(a) : new Date();

    return `${formatNumber(d.getHours())}:${formatNumber(d.getMinutes())} ${formatNumber(
        d.getDate()
    )}/${formatNumber(d.getMonth() + 1)}/${formatNumber(d.getFullYear())}`;
};

export const formatNumber = (n: number | string) => {
    return parseInt(n.toString()) > 9 ? `${parseInt(n.toString())}` : `0${parseInt(n.toString())}`;
};

export function hidePartialPhone(phone: string) {
    if (phone.length <= 0) return phone;
    let newFormat = '(' + phone.slice(0, 3) + ') **** ' + phone.slice(7, 10);
    return newFormat;
}

export function hidePartialId(id: string) {
    if (id.length <= 0) return id;
    let newFormat = id.slice(0, 3) + ' ******* ' + id.slice(id.length - 4, id.length);
    return newFormat;
}

export function formatPhoneNumber(phone: string) {
    if (phone.length <= 0) return phone;
    let newFormat = '(' + phone.slice(0, 3) + ') ' + phone.slice(3, 7) + ' - ' + phone.slice(7, 10);
    return newFormat;
}

export const getUserData = (idUser: string, listUser: any[]) => {
    const ids = listUser.map((u: any) => u.ID);

    const index = ids.indexOf(idUser);

    return listUser[index];
};

export function formatVND(amount: any) {
    if (amount.length <= 0) return;
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export function formatStringToCardNum(cardString: string) {
    if (cardString.length <= 0) return;
    return (
        cardString.slice(0, 4) +
        ' ' +
        cardString.slice(4, 8) +
        ' ' +
        cardString.slice(8, 12) +
        ' ' +
        cardString.slice(12, 16)
    );
}

export const downFile = (fullPath: string, fileName: string) => {
    fetch(fullPath)
        .then((resp) => resp.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want

            document.body.appendChild(a);
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('An error sorry'));
};

export const getCurrentHouse = (t: any) => {
    const comTime = new Date(t);
    const currentTime = new Date();

    const oneMin = 60000;
    const oneHour = 60 * oneMin;
    const oneDate = 24 * oneHour;
    const week = 7 * oneDate;
    const oneMonth = 30 * oneDate;
    const oneYear = 52 * week;

    const timeBetween = currentTime.getTime() - comTime.getTime();

    const btwHour = currentTime.getHours() - comTime.getHours();
    const btwYear = currentTime.getFullYear() - comTime.getFullYear();
    const btwMonth = currentTime.getMonth() - comTime.getMonth(); // -1
    const btwDate = currentTime.getDate() - comTime.getDate();
    const btwMinutes = currentTime.getMinutes() - comTime.getMinutes(); // -1

    if (timeBetween < 0) {
        if (Math.abs(timeBetween) < oneMin) {
            return `${Math.round(Math.abs(timeBetween) / 1000)} giây sau`;
        } else if (Math.abs(timeBetween) < oneHour) {
            return `${Math.round(Math.abs(timeBetween) / oneMin)} phút sau`;
        } else if (Math.abs(timeBetween) < oneDate) {
            return `${Math.round(Math.abs(timeBetween) / oneHour)} giờ sau`;
        } else if (Math.abs(timeBetween) < week) {
            return `${Math.round(Math.abs(timeBetween) / oneDate)} ngày sau`;
        } else if (Math.abs(timeBetween) < oneYear) {
            return `${Math.round(Math.abs(timeBetween) / week)} tuần sau`;
        } else {
            return `${Math.round(Math.abs(timeBetween) / oneYear)} năm sau`;
        }
    } else {
        if (timeBetween < oneMin) {
            return `${Math.round(timeBetween / 1000)} giây trước`;
        } else if (timeBetween < oneHour) {
            return `${Math.round(timeBetween / oneMin)} phút trước`;
        } else if (timeBetween < oneDate) {
            return `${Math.round(timeBetween / oneHour)} giờ trước`;
        } else if (timeBetween < week) {
            return `${Math.round(timeBetween / oneDate)} ngày trước`;
        } else if (timeBetween < oneYear) {
            return `${Math.round(timeBetween / week)} tuần trước`;
        } else {
            return `${Math.round(timeBetween / oneYear)} năm trước`;
        }
    }
};

export const getFileExtension = (fileName: string) => {
    const arr = fileName?.split('.');
    const fileEx = arr[arr.length - 1];
    return fileEx;
};

export const getCookieValue = (name: string) =>
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';

export const areDatesSameWeek = (startDate: Date, endDate: Date) => {
    const start = new Date(startDate);
    const now = new Date();
    const end = new Date(endDate);

    const timeDiff = end.getTime() - now.getTime();
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

    const nowMonth = now.getMonth();
    const nowYear = now.getFullYear();
    const endMonth = end.getMonth();
    const endYear = end.getFullYear();

    // Check if now is between start and end dates
    if (now.getTime() >= start.getTime() && now.getTime() <= end.getTime()) {
        // Check if end date is within 7 days
        if (daysDiff <= 7) {
            return true;
        }

        // Check if end date is in a different month or year than now
        if (daysDiff <= 7 && (nowMonth !== endMonth || nowYear !== endYear)) {
            return true;
        }
    }

    return false;
};

export const renderDay = (day: string) => {
    switch (day.toUpperCase()) {
        case 'MONDAY':
            return 'Thứ Hai';
        case 'TUESDAY':
            return 'Thứ Ba';
        case 'WEDNESDAY':
            return 'Thứ Tư';
        case 'THURSDAY':
            return 'Thứ Năm';
        case 'FRIDAY':
            return 'Thứ Sáu';
        case 'SATURDAY':
            return 'Thứ Bảy';
        case 'SUNDAY':
            return 'Chủ Nhật';
        default:
            return 'Thứ Hai';
    }
};

const rad = (x: number) => {
    return (x * Math.PI) / 180;
};

export const haversine_distance = (
    mk1: { latitude: number; longitude: number },
    mk2: { latitude: number; longitude: number }
) => {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(mk2.latitude - mk1.latitude);
    var dLong = rad(mk2.longitude - mk1.longitude);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(mk2.latitude)) *
            Math.cos(rad(mk2.latitude)) *
            Math.sin(dLong / 2) *
            Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
};

export const convertTimeToNewStyle = (time: Date) => {
    const hours = time.getHours().toString().length == 1 ? '0' + time.getHours() : time.getHours();
    const minutes =
        time.getMinutes().toString().length == 1 ? '0' + time.getMinutes() : time.getMinutes();
    const seconds =
        time.getSeconds().toString().length == 1 ? '0' + time.getSeconds() : time.getSeconds();

    const dates = time.getDate().toString().length == 1 ? '0' + time.getDate() : time.getDate();
    const months =
        (time.getMonth() + 1).toString().length == 1
            ? '0' + (time.getMonth() + 1)
            : time.getMonth() + 1;

    return (
        hours +
        ':' +
        minutes +
        ':' +
        seconds +
        ' ' +
        dates +
        '/' +
        months +
        '/' +
        time.getFullYear()
    );
};

export const converTimeToShortTimeStyle = (time: Date) => {
    if (time) {
        const hours =
            time.getHours().toString().length == 1 ? '0' + time.getHours() : time.getHours();
        const minutes =
            time.getMinutes().toString().length == 1 ? '0' + time.getMinutes() : time.getMinutes();

        return hours + ':' + minutes;
    }
};
export const convertDateToShortDateStyle = (time: Date) => {
    if (time) {
        const dates = time.getDate().toString().length == 1 ? '0' + time.getDate() : time.getDate();
        const months =
            (time.getMonth() + 1).toString().length == 1
                ? '0' + (time.getMonth() + 1)
                : time.getMonth() + 1;

        return dates + '/' + months + '/' + time.getFullYear();
    }
};

export const removeVietnameseAccent = (str: string) => {
    if (!str) return str;
    // Các ký tự tiếng Việt có dấu
    var from = 'àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ';
    // Các ký tự tiếng Việt không dấu tương ứng
    var to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeediiiiiooooooooooooooooouuuuuuuuuuuyyyyy';
    // Thực hiện việc thay thế ký tự có dấu bằng ký tự không dấu
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    return str.toLowerCase();
};

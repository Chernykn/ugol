self.addEventListener('install', (event) => {
    console.log('����������');
});

self.addEventListener('activate', (event) => {
    console.log('�����������');
});

self.addEventListener('fetch', (event) => {
    console.log('���������� ������ �� ������');
});
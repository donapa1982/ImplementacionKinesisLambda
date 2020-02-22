console.log('Loading function');

export.handler = async(event, context, callback)=>{

    const output = event.records.map((record)=>{
        let entrada = (new Buffer(record.data,'base64')).toString('utf8');

        let result = entrada + '\n';

        const payload = (new Buffer(result,'utf8')).toString('base64');

        return{
            recordId: record.recordId,
            result:'OK',
            data:payload
        };
    });

    console.log('Processing completed. Successful records ${output.length}');
    return { records:output };
};
